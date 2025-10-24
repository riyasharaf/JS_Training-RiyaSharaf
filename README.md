<h4>Javascript Day 1 <h4>
<p>
Logic behind my javascript program is :

(i) First i have created calcAverage() function which calculates total marks of all the students and then calculates the average score.

(ii)Second i have created findMax() function which finds the student who scored the highest marks. I have implemented this function using for loop.

(iii)Similarly i have created findMin() function to find student with lowest marks. Its implementation is same as findMax() function.

(iv) Then i have created CalculateGrade() function that calculates the grade of students depending on the category of marks they have. Implemented this using switch case.

(v)After that i have created RetakeExam() function that displays the name of students who have scored less than 60 precent and have to retake the exam. implemented this using for loop and created an empty array and added name using array.push() method.

(vi)Lastly i have created FinalAnswer() function that calls all other function and displays the final answer.
</p>

<h4>Javascript Day 2 <h4>

<p>
 
Firstly i calculated the total cost by making totalCost function by fetching the data from an online api and displayed it on frontend using DOM Methods (.innerHtml). After that i created Add to cart function which adds a product to cart when a user clicks on add to Cart and if the product is not in the card it increments its quantity by 1. implemented this function using for loop. After that i created Show Cart functions which renders the cart and all items present in it on the frontend using DOM Methods. and finally integrated ShowCart function in Add to cart Function. Also applied Basic css in the frntend part to make the UI Look interactive.

</p>


<h4> Javascript Day 3 <h4>

<p>
(i) Firstly i started by making basic frontend for the form using HTML and CSS.

(ii)Next, I made  code for theme button for changing the theme. Theme (Dark/Light Mode)
The code checks the saved theme from localStorage.
If the saved theme is dark, it sets the page to dark mode and changes the button text to “Switch to Light Mode”.
Clicking the button switches between dark and light mode and updates localStorage.

(iii)Next i wrote function for name , email , age , and birth validations. which checks various validations on change like no name ,  empty name , email in wrong format ,  empty email , user cant select future date as date of birth etc.. and validated them on change.

(iv)Next i made SubmitData() function for submitting the form Form Submission (DisplayData)
Stops page from reloading on submit.
Checks that:
Gender is selected,At least one hobby is selected,Country is selected,If any of these are missing, shows an error and stops submission.
Collects all input values (name, email, age, birthdate, gender, hobbies, country).
Saves them as an object in localStorage.
Clears the form after submission.
Calls displayEntries() to show all saved entries.


(v)Lastly i made DisplayEntries() function that Reads all saved entries from localStorage andShows each entry in the display box in a readable JSON format.

</p>


