# User's Gihub Details
This is sample github project where users can search their github profile data by adding github `userid`.

This project includes two screens:-
1. ***GithubUserInput*** :- Where user can add his `github userid` and click search perform to get his github details in next page.

2. ***GihubDetails*** :- Where user can see his *basic profile*, *all public repositories* and *commit history*

To accomplish this project [official github api](https://docs.github.com/en/free-pro-team@latest/rest) has been used as follows:-

 - Get user's basic github info `https://api.github.com/users/:username`
 
 - Get user's all public repositories `https://api.github.com/users/:username/repos`
 - Get all commit messages from a particular repository `https://api.github.com/repos/:username/:repo_name/commits`


# Run Project Locally
This React Native project can be setup locally in <ins>*3 simple steps*</ins> and also assume that ***React Native Cli*** and ***Android Studio*** is already installed.
1. Clone the repository from remote to local machine by using `https://github.com/singhsnehaa/RNApp` command in your terminal.
 
2. Navigate to the project folder by `cd RNAapp` and install the dependencies by command `npm install`

3. Run the project by using command `npx react-native run-android`

