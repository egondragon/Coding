#!/bin/bash

# Change directory to your repository
cd /home/eschyle/Coding

# Stage all changes
git add .

# Commit changes with a descriptive message
git commit -m "Automatic commit at $(date +'%Y-%m-%d %H:%M:%S')"

# Push changes to the remote repository
git push origin master  # Replace 'master' with your branch name if different

