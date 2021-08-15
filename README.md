# Aspire
This application demonstrate a simple loan application with following 2 personas: 
* Customer
  * Accessible at [Customer Portal](http://localhost:8080/home?role=admin) 
  * Who can submit a loan request just by simply providing loan amount and duration in year(s).
  * On approval, customer can submit the weekly repayment amount for their submitted aplication.
* Admin
  * Accessible at [Admin Page](http://localhost:8080/home?role=admin) 
  * Who reviews and approve the submitted loan application
  * Who can also rejects the application with proper justifications


## Pre req
* Node >=12
* element-plus
* Using Vue 3 setup

## Getting Started
 
  ```bash
  # Install Dependencies
  > npm install
  ```

```bash
# Compiles and hot-reloads for development
# Also, starts a live server of the application at http://localhost:8080
> npm run serve
```

```bash
# Starts a mocky API server at http://localhost:3000
> npm run mocky
```

```bash
# Compiles and minifies for production ready build
> npm run build
```

```bash
# Run your unit tests (ToDo)
npm run test:unit
```

### The UI components are used from [Element Plus](https://element-plus.org/#/en-US)

### CSS Challenge Demo at https://aspire-css-challenge.netlify.app/

<br>
<br>
<br>

*** *Since mocked API server could not be deployed to netlify, it needs to be run locally to check the application flow*