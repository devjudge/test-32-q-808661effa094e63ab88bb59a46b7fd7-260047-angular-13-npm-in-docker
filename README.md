# cj-app
Angular 13 SPA

IMPORTANT NOTES (In case Backend Service API Integration is required):

    1. The backend endpoint host url is mentioned in environment.ts as well as environment.prod.ts. The property name is "apiUrl". An example is mentioned in "app.component.ts".
    2. PLEASE USE THIS PROPERTY ("apiUrl") WHEN YOU ARE TRYING TO CALL A BACKEND API. ALSO DON'T CHANGE THIS PROPERTY ELSE THE APP WILL NOT BUILD PROPERLY AND YOUR SUBMISSION WILL NOT BE SCORED. 
    3. Make sure that all the properties mentioned in environment.ts are also mentioned in environment.prod.ts for the app to build properly.

PROJECT BUILD STEPS (Make sure that your project is getting built successfully):

    Pre-requisites:
    1. Install http-server module (https://www.npmjs.com/package/http-server).
    2. Install node, npm, angular-cli (13) for angular 13

    Steps:
    1. Go to the project root directory.
    2. Run the following commands in the terminal/command line to build the app:
            - npm install
            - ng build --prod    
    3. Please make sure that your project is built successfully.
    
CLOUD-IDE SETUP STEPS(follow the below steps in case you are using the Cloud IDE instead of your Local IDE):

    1. Please run the below commands from the project root in a separate terminal to setup live run support in Cloud IDE:
        - chmod 0755 ./chrome-test-setup.sh
        - sh ./chrome-test-setup.sh
    2. Make the port 9515 public
