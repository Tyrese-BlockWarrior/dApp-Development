# DApp (Decentralized Application) Development using Hyperledger Fabric, Composer, Yo and Angular
A web app to replace the current EHR (electronic Healthcare Records) system using blockchain technology

## Getting Started
Clone the repo using 
```
git clone https://github.com/mjso7660/PH360_project.git
```

Move to ehr_0.0.4 directory and run the command
```
composer-rest-server -c admin@ehr
```
This will allow REST API to run on port :3000. 
![Alt text](3000.jpg?raw=true "Title")


To access the angular front-end, move to ./angular-app directory and run
```
npm start
```
![Alt text](4200.jpg?raw=true "Title")
### Prerequisites

NPM --v 5.X.X
Hyperledger-composer

Hyperledger-playground(optional)

Hyperledger-fabric
Yoemen

#### oauth2client
Authentication can be use using Github account. 
```
composer-rest-server -c admin@ehr -a true
```

## Running the tests

No tests are present at the moment.

## Authors

* **Min Joon So** - *Initial work* - [mjso7660](https://github.com/mjso7660)
* **Shailesh Patro**
