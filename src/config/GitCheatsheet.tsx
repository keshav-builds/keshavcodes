export interface GitCommand {
  cmd: string;
  desc: string;
}

export interface GitCategory {
  category: string;
  commands: GitCommand[];
}

export const gitCommands: GitCategory[] = [
  {
    category: 'Getting Started',
    commands: [
      { cmd: 'git init', desc: 'Start a new git repository in the current folder' },
      { cmd: 'git clone <url>', desc: 'Copy an existing repository' },
      { cmd: 'git status', desc: "See what's changed and what's staged" },
      { cmd: 'git config --global user.name "Your Name"', desc: 'Set your name for commits' },
    ],
  },
  {
    category: 'Everyday Workflow',
    commands: [
      { cmd: 'git add <file>', desc: 'Stage a file for commit' },
      { cmd: 'git add .', desc: 'Stage everything in the folder' },
      { cmd: 'git commit -m "Message"', desc: 'Commit your staged changes with a neat message' },
      { cmd: 'git push', desc: 'Send your commits to the remote repository' },
      { cmd: 'git pull', desc: 'Get the latest changes from remote' },
    ],
  },
  {
    category: 'Branching & Merging',
    commands: [
      { cmd: 'git branch', desc: 'List all branches' },
      { cmd: 'git checkout -b <branch>', desc: 'Create and switch to a new branch' },
      { cmd: 'git checkout <branch>', desc: 'Switch to an existing branch' },
      { cmd: 'git merge <branch>', desc: 'Merge another branch into your current branch' },
    ],
  },
  {
    category: 'Undo & Fix Mistakes',
    commands: [
      { cmd: 'git restore <file>', desc: 'Reset file changes (not staged)' },
      { cmd: 'git reset --hard', desc: 'Discard all local changes (dangerous!)' },
      { cmd: 'git revert <commit>', desc: 'Create a new commit that undoes the changes' },
    ],
  },
  {
    category: 'Extras',
    commands: [
      { cmd: 'git log --oneline --graph --decorate', desc: 'Visualize commit history neatly' },
      { cmd: 'git stash', desc: 'Temporarily save your changes to work on something else' },
      { cmd: 'git remote -v', desc: 'See remote repository URLs' },
    ],
  },
];
