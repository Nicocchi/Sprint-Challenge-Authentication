<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?

    Sessions allow us to be able to store data that allow the site to persist for a period of time.
    Like, logging in users, allowing users to see restricted pages depending if they are authorized or not.

2. What does bcrypt do to help us store passwords in a secure manner.

    It hashes the plain text with X amount of hashes we define and we can store it in the database.
    We can also compare hashes to check if the same password is correct.

3. What does bcrypt do to slow down attackers?

    It has a high encryption to hash the passwords.

4. What are the three parts of the JSON Web Token?

    Header, payload and signature.
    The header contains the algorithm and the token type while the payload contains the data that we
    stored into the token. The signature is where the secret token is encrypted and allows the token
    to be verified or not.