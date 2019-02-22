1. git init
2. git add .
3. git commit -m "initial commit"
4. > git remote add origin https://github.com/<repo owner>/<repo name>.git
> git push -u origin master


ReDeploy:
1. git status
2. git add .
3. git commit -m "changed greeting"
4. git push - u origin master
5. git push heroku master
