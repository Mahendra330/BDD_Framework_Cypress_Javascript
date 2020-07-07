# BDD_Framework_Cypress_Javascript

Create a test case for website that checks that
-if a customer goes on a product category page;
-then goes on a product page and puts the product in the cart;
-then makes sure that
	- this product can be found in the cart 
	- the cart icon in the header gets updated and shows a little circle with '1'

Pre Condition:
===============
Step1: Download Code and open in code Editor (Preference: Visual Code Editor).
Step2:Open Terminal from Code Editor and send below Command:
	cd /your/project/path
	npm install cypress --save-dev

Step3: Open Test Runner from code editor (npm run cy:open) and Run the Test Script.
Step4: I have mentioned multiple options to run test in package.json under script.
       You can chose either cross browser testing or Dash Board Testing or in Command line or with Terminal or with Mochawesome Report.

Step5: I have added Docker File in Framework to run test with Docker.please follow below step.
	-->open Docker from Test Machine.
	-->Install Plugin for Docker in code Editor (Visual Code Editor), if it is not available.
	-->Trigger below Command in Terminal and it will download dependency and run the test automatically.
	-->docker build -t cypress .


Description of Project code:
============================
1. It is BDD framework with Cucumber and Gherkin Language.
2. Framework is designed with Cypress and Java Script.
3. Page Object design pattern is used for designing framework.
4. This Framework contained one Feature file called Select_Product.feature.
	1. This Feature File has 3 Different Scenario for 3 Different product Category as per Product requirement.
5. This Framework can be maintainable and reusable later. All the Page Objects are separated from Stepdefinition file.		
6.Desription of Framework Componet:
	a. Config.js: This has Contained all global variable data and which will be defined by user as per choice and this Data will be driven to Test Case during method call.
		     This is mainly designed to avoid Hard coding.You can define product category and Product as per your choice.

	b. Commands.js(Available Under Support folder): This has contained all Customized commands like Selection of Product Category and Selection of Product.

	d. Page-Objects Folder: This folder contains 1 subfolder called Select_ProductPage and this has contianed page Objects for all Scenarions.

	e. Integration Folder: This Folder has contained Step definition file(Select_ProductStep.js)  and feature file(Select_Product.Feature).

7. Test Report is Available under mochawesome-report folder.
8. You can check Test Results from DashBoard: https://dashboard.cypress.io/projects/4me144/runs/2



