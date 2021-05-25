SELECT first_name, last_name, rental_date  FROM customer, rental
WHERE customer.customer_id = rental.customer_id
ORDER BY (rental.return_date - rental.rental_date) DESC
limit 1;