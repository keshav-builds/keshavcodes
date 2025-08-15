export interface SqlCommand {
  cmd: string;
  desc: string;
}

export interface SqlCategory {
  category: string;
  commands: SqlCommand[];
}

export const sqlCommands: SqlCategory[] = [
  {
    category: 'Database & Table Management',
    commands: [
      { cmd: "CREATE DATABASE company_db;", desc: "Create a new database named 'company_db'." },
      { cmd: "USE company_db;", desc: "Switch context to the 'company_db' database." },
      { cmd: "CREATE TABLE employees (id INT PRIMARY KEY, name VARCHAR(50), department VARCHAR(30), salary DECIMAL(10,2), join_date DATE);", desc: "Create an 'employees' table to store employee details." },
      { cmd: "ALTER TABLE employees ADD email VARCHAR(100);", desc: "Add an 'email' column to the 'employees' table." },
      { cmd: "DROP TABLE employees;", desc: "Delete the 'employees' table." },
    ],
  },
  {
    category: 'Basic CRUD Operations',
    commands: [
      { cmd: "INSERT INTO employees (id, name, department, salary, join_date) VALUES (1, 'Rahul Sharma', 'Sales', 55000.00, '2022-01-15');", desc: "Insert data for a new employee." },
      { cmd: "SELECT * FROM employees;", desc: "Retrieve all employee data." },
      { cmd: "SELECT name, salary FROM employees WHERE department = 'Sales';", desc: "Get names and salaries of employees in Sales." },
      { cmd: "UPDATE employees SET salary = salary * 1.1 WHERE department = 'Sales';", desc: "Give a 10% raise to Sales department employees." },
      { cmd: "DELETE FROM employees WHERE id = 3;", desc: "Remove the employee with id 3." },
    ],
  },
  {
    category: 'Filtering, Sorting, and Aggregation',
    commands: [
      { cmd: "SELECT * FROM employees WHERE salary > 60000;", desc: "Find employees earning more than ₹60,000." },
      { cmd: "SELECT COUNT(*) FROM employees WHERE department = 'IT';", desc: "Count number of employees in IT department." },
      { cmd: "SELECT department, AVG(salary) as avg_salary FROM employees GROUP BY department;", desc: "Average salary by department." },
      { cmd: "SELECT name FROM employees ORDER BY join_date DESC;", desc: "List employee names ordered by most recent join date." },
      { cmd: "SELECT DISTINCT department FROM employees;", desc: "List all unique departments." },
    ],
  },
  {
    category: 'Joins and Relationships',
    commands: [
      { cmd: "CREATE TABLE projects (project_id INT PRIMARY KEY, name VARCHAR(50), start_date DATE);", desc: "Create a table for projects." },
      { cmd: "CREATE TABLE assignments (emp_id INT, project_id INT, role VARCHAR(30), FOREIGN KEY(emp_id) REFERENCES employees(id), FOREIGN KEY(project_id) REFERENCES projects(project_id));", desc: "Create assignments linking employees to projects." },
      { cmd: "SELECT e.name, p.name AS project, a.role FROM employees e INNER JOIN assignments a ON e.id = a.emp_id INNER JOIN projects p ON a.project_id = p.project_id;", desc: "List employees, projects, and roles." },
      { cmd: "SELECT department, COUNT(DISTINCT id) FROM employees GROUP BY department HAVING COUNT(DISTINCT id) > 5;", desc: "Departments with more than 5 employees." },
    ],
  },
  {
    category: 'Useful Interview Query Patterns',
    commands: [
      { cmd: "SELECT TOP 5 * FROM employees ORDER BY salary DESC;", desc: "Find the top 5 highest-paid employees." },
      { cmd: "SELECT name FROM employees WHERE join_date BETWEEN '2023-01-01' AND '2023-06-30';", desc: "Employees who joined in the first half of 2023." },
      { cmd: "SELECT department, SUM(salary) AS total_salary FROM employees GROUP BY department;", desc: "Total salary expense per department." },
      { cmd: "SELECT e1.name FROM employees e1 WHERE salary > (SELECT AVG(salary) FROM employees WHERE department = e1.department);", desc: "Employees earning above their department's average salary." },
      { cmd: "WITH RecentHires AS (SELECT * FROM employees WHERE join_date > '2023-01-01') SELECT * FROM RecentHires WHERE salary > 50000;", desc: "Common Table Expression (CTE) example: recent hires earning above ₹50,000." },
    ],
  },
];
