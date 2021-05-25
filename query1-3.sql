SELECT first_name, last_name, rental_date  FROM customer, rental
ORDER BY return_date DESC , rental_date ASC
LIMIT 1;