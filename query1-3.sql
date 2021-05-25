SELECT first_name, last_name, rental_date  FROM customer, rental
ORDER BY rental_date ASC, return_date ASC
LIMIT 1;