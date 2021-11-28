<div align="center">
<h1>vaccinecounter</h1>
<hr>
<strong>A simple web application for monitoring covid-19 vaccines and people in a doctors office.</strong><br><br>
<img src="https://img.shields.io/github/workflow/status/mathisburger/vaccinecounter/CodeQL?style=for-the-badge">
<img src="https://img.shields.io/github/license/mathisburger/vaccinecounter?style=for-the-badge"> 
<img src="https://img.shields.io/github/v/release/mathisburger/vaccinecounter?style=for-the-badge">
</div>
<hr>
<div align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/640px-PHP-logo.svg.png" height="100"/>
<img src="https://blog.sensiolabs.com/wp-content/uploads/2020/10/symfony_logo_vertical.png" height="100">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" height="100">
</div>

# Project information

Vaccinecounter is a web-application built with the symfony framework for php and the plain react framework. It provides some tools for doctors offices for monitoring the total number of people in the office. That helps to meet the limit of peoples. Furthermore, you can count the number
of people that got vaccined. But the best about this application is, the privacy. There is no user specific information stored in the database or elsewhere. Therefore, the application meets all requirements of the german DSGVO2.

# Installation

Installing the vaccinecounter application in your network is very easy. 
Installing the application with docker is definety the most comfortable way.<br>
<strong>NOTE:</strong> You need to have docker installed on your device.

* Download the `docker-compose.yml`
  ```shell
    wget https://raw.githubusercontent.com/MathisBurger/vaccinecounter/master/docker-compose.yml
  ```

* Change `APP_SECRET` and passwords
  ```yml
    APP_SECRET: Example secret # choose your own
    POSTGRES_PASSWORD: example_password # choose a safe
    # change the password also in DATABASE_URL
  ```  

* Start docker containers
  ```shell
    docker-compose up -d
  ```

# Evironment variables

| **variable**   | **default** | **description**                                                                                                                                                                                         |
|----------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `APP_ENV`      | prod        | Defines the mode the application is running on. We recommend using the `prod` mode, because it is optimized and does not expose any user data instead of the `dev` mode, which is for development only. |
| `APP_SECRET`   | *none*      | The secret for storing secret. It is required by symfony flex and should be complex and secure.                                                                                                         |
| `APP_VERSION`  | v1.0.0      | The current version of the backend server. It has no real purpose, but can be important in later updates because of auto-update cron jobs.                                                              |
| `DATABASE_URL` | *none*      | The url to the postgresql database that all the data is stored into.                                                                                                                                    |

# Contribute

If you want to contribute to this project, you can contact me via social media platforms. If you just have a feature request for this project feel free to open a new issue and assign one of the developers (Mathis Burger) to the issue.
After that I will work as soon as I can on updating the project with your feature request.

# privacy

Because privacy is very important for the target field of this application, the whole application is optimized for privacy. There is no user specific information stored in the application database or elsewhere. Furthermore, the stored data is independend from each other. That means that one stack of data cannot be associated with another, because the only comparable field is a timestamp of the action. Lastly, the whole application is open-source as well as the development process (planing, etc.). That makes the application better understandable, secure, and trustable for everyone who uses it.