# R_To_Do

This project is a Single Page Application developed in React, using Next.js and TypeScript!

## How does it works?

It consists in a simple application with the goal of developing a basic To Do List.

The To Do List is splitted in two parts, the first one is a formulary that creates each activity of the list, with two fields, the activity itself and the difficulty of the activity. The second part is a list with the activities already created. Each activity has a delete button and a edit option. To edit the activity, the user may click in the 'edit' button and edit the fields that will appear in a modal. After confirming the edits, the new version of the activity is confirmed and shown to the user.

## How was it developed?

It was developed using React, Next.js and TypeScript.

The list of activities are saved in a Array. At first the array is initialized empty and according to the creation of tasks, it starts to be filled of tasks. All of the data in the SPA is defined acording to the definition of 'Types' in TypeScript. 

This SPA uses Next.js because of its facility of creating the Application itself, making the process of creating it easier and faster than the usual 'create-react-app'. Also, some other Next.js optimizations were considered in the developing process. 

In addition, the project was developed with the contribuition of the 'TypeScript do básico ao avançado (c/ React, Express)' course, by 'Matheus Battisti' and 'Hora de Codar', delivered in the Udemy plataform.
