
The website is an online platform, where clients can book appointments for barber services, check prices and services.
Project features include:
- User authentication and authorization using JWT Token
- Ability to select a barber, service, date, and time\n - Once an appointment is booking, the selected session is removing from the barber's schedule
- Ability to check or cancel appointments in the user's personal account (implemented in the demo version)

The website has a simple, stylish, and practical design that provides easy navigation and ease of use.

## Configuration
to server/.env : 

```shell
 dbUrl = "Your connection to MongoDB"
 secretKey = "Your random secret key"
```

to client/src.env.local : 
```shell
REACT_APP_GOOGLE_MAPS_API_KEY = "Your google maps api key"
```

# Preview
<img src="/demo-images/barbershop-demo.png?raw=true" >
<img src="/demo-images/demo-login.png?raw=true" >
<img src="/demo-images/demo-registration.png?raw=true" >
<img src="/demo-images/demo-booking.png?raw=true" >
<img src="/demo-images/demo-myAccount.png?raw=true" >
