# management
- Its a REST API for management

#How to use:

- npm run dev
- yarn dev

#Routes:

 - Address: /address
    - GET: Return all addresses data.
    - GET[/{id}]: Return a specific address.
    - POST: Create a new address.

 - Category: /category
    - GET: Return all categories data.
    - GET[/{id}]: Return a specific category.
    - POST: Create a new category.
 
 - Client: /client
    - GET: Return all clients data.
    - GET[/{id}]: Return a specific client.
    - POST: Create a new client.
    
 - Order: /order
    - GET: Return all orders data.
    - GET[/{id}]: Return a specific order.
    - POST: Create a new order.
    
 - OrderItem: /orderitem
    - GET: Return all orderitems data.
    - GET[/{id}]: Return a specific orderitem.
    - POST: Create a new orderitem.  
    
 - Product: /product
    - GET: Return all products data.
    - GET[/{id}]: Return a specific product.
    - POST: Create a new product.
    
 - Status: /status
    - GET: Return all status data.
    - GET[/{id}]: Return a specific status.
    - POST: Create a new status.
    
    
#Bodys:

  - Address: { 
            street_name: String;
            street_number: String;
            zipcode: String;
            city: String;
            country: String;
            neighborhood: String;
            client_id: Number;
            }

  - Category: { 
            name: String;
            }

  - Client: { 
            name: String;
            doc: String;
            phone: String;
            facebook: String;
            instagram: String;
            }

  - Order: { 
            amount: Number;
            status_id: Number;
            client_id: Number;
            address_id: Number;
            create_at: String;
            }

  - OrderItem: { 
            order_id: String;
            product_id: Number;
            quantity: Number;
            }

  - Product: { 
            name: String;
            price: String;
            category_id: String;
            stock: String;
            }

  - Status: { 
            label: String;
            value: String;
            }
