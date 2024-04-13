import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js'
  
// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js'
  
// Add Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js'
// console.log('hi')
    const firebaseConfig = {
        apiKey: "AIzaSyBM5Vxw-lufckSsZP0lfru8v7CNIxoHFHA",
        authDomain: "groeb-auth.firebaseapp.com",
        projectId: "groeb-auth",
        storageBucket: "groeb-auth.appspot.com",
        messagingSenderId: "444084763936",
        appId: "1:444084763936:web:b5f7080818b953ece82b45",
        measurementId: "G-6KM8JB4SVE"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
console.log(app)


// Button
const Groww_LoginRegisterClick = document.querySelector(".Groww-loginRegister");
const IndexBody = document.getElementById("IndexBody");

Groww_LoginRegisterClick.addEventListener("click",()=>{
    console.log("Button Active")
    
        let LoginContainer = document.createElement("div");
        LoginContainer.classList.add("LoginAndRegisterContainer");
        IndexBody.appendChild(LoginContainer);

        //main body of login page
        let LoginBody = document.createElement("div");
        LoginBody.classList.add("LoginBody");
        LoginContainer.appendChild(LoginBody);


        //left side of login page
        let LoginBodyLeft = document.createElement("div");
        LoginBodyLeft.classList.add("LoginBodyLeft");
        LoginBody.appendChild(LoginBodyLeft);

        //left side inner Element
        let LoginBodyLefth2 = document.createElement("h1");
        LoginBodyLefth2.classList.add("LoginBodyLefth2");
        LoginBodyLefth2.textContent = "Simple, Free Investing.";
        LoginBodyLeft.appendChild(LoginBodyLefth2);

        //left side innner element bottom container
        let LoginBodyLeftBottom = document.createElement("div");
        LoginBodyLeftBottom.classList.add("LoginBodyLeftBottom");
        LoginBodyLeft.appendChild(LoginBodyLeftBottom);

        //left side inner element bottom Animation box
        let LoginBodyLeftBottomAnimation = document.createElement("div");
        LoginBodyLeftBottomAnimation.classList.add("LoginBodyLeftBottomAnimation");
        LoginBodyLeftBottom.appendChild(LoginBodyLeftBottomAnimation);

        let LoginBodyLeftBottomText = document.createElement("h2");
        LoginBodyLeftBottomText.classList.add("LoginBodyLeftBottomText");

            let TextContentDisplay = ["Direct Mutual Funds", "ETFs", "Gold",
                                        "US Stocks", "Fixed Deposits", "Stocks"];


            let num = 0;
            LoginBodyLeftBottomText.textContent =  TextContentDisplay[num];
            function ChangeText(){
                if(num != 6){
                    LoginBodyLeftBottomText.textContent =  TextContentDisplay[num];
                    num++;
                }
                else{
                    num = 0;
                }   
            }
            setInterval(ChangeText,3000);
        LoginBodyLeftBottom.appendChild(LoginBodyLeftBottomText);
    

        //Right side of login page
        let LoginBodyRight = document.createElement("div");
        LoginBodyRight.classList.add("LoginBodyRight");
        LoginBody.appendChild(LoginBodyRight);

        // Cross button 
        let crossButton = document.createElement("div");
        crossButton.classList.add("CrossButton");
        crossButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        LoginBody.appendChild(crossButton);

        //Close the login page 
            crossButton.addEventListener("click", () => {
                LoginContainer.style.display = "none";
            })
        
        //right side of login page Heading
        let LoginBodyRighth1 = document.createElement("h2");
        LoginBodyRighth1.classList.add("LoginBodyRighth1");
        LoginBodyRighth1.textContent = "Welcome To Groww";
        LoginBodyRight.appendChild(LoginBodyRighth1);

        // Right Side login page Google login
        let LoginBodyRightGoogleConTainer = document.createElement("div");
        LoginBodyRightGoogleConTainer.classList.add("LoginBodyRightGoogleConTainer");
        LoginBodyRight.appendChild(LoginBodyRightGoogleConTainer);

        let LoginBodyRightGoogleConTainerImg = document.createElement("div");
        LoginBodyRightGoogleConTainerImg.classList.add("LoginBodyRightGoogleConTainerImg");
        LoginBodyRightGoogleConTainer.appendChild(LoginBodyRightGoogleConTainerImg);

        let LoginBodyRightGoogleConTainerText = document.createElement("div");
        LoginBodyRightGoogleConTainerText.classList.add("LoginBodyRightGoogleConTainerText");
        LoginBodyRightGoogleConTainerText.textContent = "Continue with Google";
        LoginBodyRightGoogleConTainer.appendChild(LoginBodyRightGoogleConTainerText);

            // horizonal line and text or 
        let MainLinesection = document.createElement("div");
        MainLinesection.classList.add( "MainLinesection");
        LoginBodyRight.appendChild(MainLinesection)
            
        // horizontal line 1
        let line1 = document.createElement("div");
        line1.classList.add("HorizonalLine");
        MainLinesection.appendChild(line1)
        // or text
        let OrText = document.createElement("div");
        OrText.classList.add( "ORtext");
        OrText.textContent = "Or";
        MainLinesection.appendChild(OrText)
            // horizontal line 2
        let line2 = document.createElement("div");
        line2.classList.add("HorizonalLine");
        MainLinesection.appendChild(line2)

        //Email container
        let EmailContainer = document.createElement("div");
        EmailContainer.className = "EmailContainer";
        LoginBodyRight.appendChild(EmailContainer);
        // email text 
        let emailText = document.createElement("div");
        emailText.textContent="Your Email Address";
        emailText.className ="EmailText";
        EmailContainer.appendChild(emailText);
        //input text
        let InputTextBox = document.createElement("input");
        InputTextBox.className ="InputTextBox";
        EmailContainer.appendChild(InputTextBox);


        //button 
        let button = document.createElement("div")
        button.className="ContinueButton";
        button.textContent="Continue";
        LoginBodyRight.appendChild(button);
        const ContinueButton = document.querySelector(".ContinueButton");
        // console.log(ContinueButton);
            ContinueButton.addEventListener("click", () => {
            ContinueButtonClickHnadler();
        });
    
        const GoogleButton = document.querySelector(".LoginBodyRightGoogleConTainerText");
        GoogleButton.addEventListener("click", () => {
          signInWithGoogle();
        });

});
function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        // Google authentication successful
        const user = result.user;
        console.log("Google user signed in:", user);
        // Add code to redirect to another page or update UI for Google user
    })
    .catch((error) => {
        // Handle errors for Google authentication
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Google authentication error:", errorMessage);
        // Add code to display error message to the user
    });
}
  
    
function ContinueButtonClickHnadler(){
        // Code to replace "Welcome to Groww" with "Join Groww"
        const LoginBodyRighth1 = document.querySelector(".LoginBodyRighth1");
    
        LoginBodyRighth1.textContent = "Join Groww";
       

        // Code to remove "Continue with Google" section
        const LoginBodyRightGoogleConTainer = document.querySelector(".LoginBodyRightGoogleConTainer");
        if(LoginBodyRightGoogleConTainer){
            LoginBodyRightGoogleConTainer.remove();
        }

        // Code to remove "Or" section
        const MainLinesection = document.querySelector(".MainLinesection");
        if(MainLinesection){
            MainLinesection.remove();
        }

    // Code to add password input field
    const EmailContainer = document.querySelector(".EmailContainer");
    const passwordInput = document.createElement("input");
    passwordInput.className = "InputTextBox";
    passwordInput.type = "password";
    passwordInput.placeholder = "Password";


    
    // Create a horizontal line
    const horizontalLine = document.createElement("hr");
  
    // Add margin to email and password input fields
    passwordInput.style.marginTop = "60px";

    // Append elements to the EmailContainer
    EmailContainer.appendChild(horizontalLine);
    EmailContainer.appendChild(passwordInput);
    
    // Code to hide Continue button and show Submit button
    const ContinueButton = document.querySelector(".ContinueButton");
    ContinueButton.style.display = "none";

    const FormContainer = document.createElement("div");
    FormContainer.className = "FormContainer";
    LoginBodyRighth1.appendChild(FormContainer);

    // Append elements to the form container
    FormContainer.appendChild(EmailContainer);

    const SubmitButton = document.createElement("div");
    SubmitButton.className = "SubmitButtton";
    SubmitButton.textContent = "Submit";
    LoginBodyRighth1.appendChild(SubmitButton);
    
    SubmitButton.addEventListener("click", () => {
        clickSubmit();
        console.log('hello')
    });
 ;
    // const SubmitButton = document.createElement("div");
    // SubmitButton.textContent = "Submit";
}
    const auth = getAuth(); //Initialize auth
    async function clickSubmit(){
        
        const email = document.querySelector(".InputTextBox").value;
        const password = document.querySelector(".InputTextBox").value;
        
        
        try {
            // Check if the user already exists
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // User login successful
            const user = userCredential.user;
            console.log("User logged in:", user);
            // Add code to redirect to another page or update UI for existing user
        } catch (signInError) {
            // If user does not exist, create a new account
            try {
              const newUserCredential = await createUserWithEmailAndPassword(auth, email, password);
              // New user creation successful
              const newUser = newUserCredential.user;
              console.log("New user created:", newUser);
              // Add code to redirect to another page or update UI for new user
            } catch (createError) {
              // Handle errors for both sign in and create account
              const signInErrorCode = signInError.code;
              const signInErrorMessage = signInError.message;
              const createErrorCode = createError.code;
              const createErrorMessage = createError.message;
              console.error("Sign in error:", signInErrorMessage);
              console.error("Create account error:", createErrorMessage);
              // Add code to display error message to the user
            }
    }
    window.location.href = "./after_login/last.html";
        
}