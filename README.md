# So you forgot how to do this?

## Installation
1. git clone `the-address-for-this-repo`
2. yarn
3. checkout develop
4. Add folder in `/content/blog/` for new posts. Format is the `YYYY-MM-DD-title`.
5. Add `index.md` with the post you probably wrote and export from Notion.    
As part of that you need to make sure on the top it has this:
    ```
    ---
    title: Some Blog Title Here
    date: "2020-01-22T16:12:03.284Z"
    ---
    ```
5. Stage, commit, push, etc.
6. yarn deploy
7. It will generate some public files you can commit and push up as well.

The End!