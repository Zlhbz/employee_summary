# employee_summary


### Purpose
Creating a well designed, intuitive to use website and easy to update the website with the data is given by inquirer.

### Technologies 
* Bootstrap HTML/CSS 
* JQuery
* Font Awesome Icons

### Process 
* First I created an html file which was planned to use after all other functions were implemented.
* I used npm package inquirer in order to get data about team members.(It only asks about manager one time. After getting data about manager,it asks to pick one of the three options, "engineer", "intern", or "none". After getting data, it keeps asking the choices if none isn't picked. If none is picked, process of getting data finishes)
* I divided html file I created before to 3 pieces. First one is the part up to cards, second is cards, and last one is up to the end of the file. I kept that 3 parts as strings. I also kept 3 different card options as strings in order to pick depending on the data I got through inquirer. After concatenating strings, I used inbuilt fs package (writeFile function) to create a new file.

### Goal 
* I didn't have time to polish html file. It looks super easy. I am going to spend more time on it.