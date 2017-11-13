CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  dept_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL, 
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, dept_name, price, quantity) 
values ('Sudafed', 'Medicine', 12.99, 10),
 ('Vitamin D', 'Medicine', 5.99, 37),
 ('La Croix - Apricot (12PAK)', 'Beverages', 4.99, 169),
 ('Amethyst', 'Rocks', 27.99, 100),
 ('Peridot', 'Rocks', 13.99, 45),
 ('Bamazon Brand Toothpaste', 'Toiletries', 1.99, 85),
 ('Dua Lipa (Deluxe Version) CD', 'Entertainment', 12.99, 10),
 ('Tickets to Hamilton', 'Entertainment', 100000.00, 7),
 ('Bamazon Brand Matcha Green Tea', 'Beverages', 24.99, 400),
 ('The Good Kind of Floss', 'Toiletries', 6.10, 1000);