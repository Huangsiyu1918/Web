SELECT DISTINCT address FROM inventory, address, store, film
WHERE film.title = "TWISTED PIRATES"
AND film.film_id = inventory.film_id
AND inventory.store_id = store.store_id
AND store.address_id = address.address_id;