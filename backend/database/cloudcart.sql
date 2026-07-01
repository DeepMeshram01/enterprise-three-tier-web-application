CREATE DATABASE IF NOT EXISTS cloudcart;

USE cloudcart;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(100) NOT NULL
);

INSERT INTO products (name, price, category) VALUES
('Laptop', 75000.00, 'Electronics'),
('Smartphone', 30000.00, 'Mobiles'),
('Headphones', 5000.00, 'Accessories'),
('Smart Watch', 12000.00, 'Wearables');
