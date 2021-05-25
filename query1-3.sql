SELECT first_name, last_name, rental_date  FROM customer, rental
WHERE customer.customer_id = rental.customer_id
ORDER BY return_date DESC , rental_date ASC
LIMIT 1;
