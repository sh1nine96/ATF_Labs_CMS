delete from client;

INSERT INTO CLIENT (id, name, main_contact_person, address, city, country, gst_number, email, phone) VALUES (1, 'Client1', 'Paul', 'ABC Street', 'New Hampshire', 'England', 'GST111777', 'client1@mail.com', '22222' );

INSERT INTO CLIENT (id, name, main_contact_person, address, city, country, gst_number, email, phone) VALUES (2, 'Client2', 'Dhruv', 'Vikas Colony', 'New Delhi', 'India', 'GST1289635', 'client2@mail.com', '22222' );

INSERT INTO CLIENT (id, name, main_contact_person, address, city, country, gst_number, email, phone) VALUES (3, 'Client3', 'Mac', 'XYZ Colony', 'New Orleans', 'USA', 'GST1289635', 'client3@mail.com', '22222' );

INSERT INTO CLIENT (id, name, main_contact_person, address, city, country, gst_number, email, phone) VALUES (4, 'Client4', 'Xander', 'Holman Street', 'Vancouver', 'Canada', 'GST1289635', 'client4@mail.com', '22222' );


delete from invoice;
INSERT INTO INVOICE (invoice_id, amount, currency, date, description, header, selected_bank_account, status, client_id) VALUES (100, 1000.00, 'USD', '2023-06-16', 'Sample description', 'Sample header', 'Bank Account A', true, 1);
--INSERT INTO ROLE VALUES(1, 'ADMIN');
--INSERT INTO USER(id, password, username, role_id) VALUES(1, 'test', 'test', 1);