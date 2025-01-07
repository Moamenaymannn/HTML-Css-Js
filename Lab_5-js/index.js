var orders = [
          {
            orderId: 'ORD001',
            customer: 'John Doe',
            items: 'item1:2,item2:1,item3:5',
            orderDate: '2023-12-01',
            deliveryDate: '2023-12-05',
            deliveryAddress: '123, Main Street, Springfield, USA',
          },
          {
            orderId: 'ORD002',
            customer: 'Jane Smith',
            items: 'itemA:3,itemB:4',
            orderDate: '2023-11-15',
            deliveryDate: '2023-11-20',
            deliveryAddress: 'Flat 4B, Elmwood Apartments, New York, USA',
          },
          {
            orderId: 'ORD003',
            customer: 'Alice Johnson',
            items: 'itemX:1',
            orderDate: '2023-10-10',
            deliveryDate: '2023-10-15',
            deliveryAddress: '456, Pine Lane, Denver, USA',
          }
        ];
        
       // Transform the orders array into the following format:
        
        var formattedOrders = [
          {
            orderId: 'ORD001',
            customer: 'John Doe',
            totalItems: 8,
            orderDate: '2023-12-01',
            deliveryDate: '2023-12-05',
            deliveryDuration: 4,
            deliveryCountry: 'USA',
            deliveryCity: 'Springfield',
            deliveryStreet: 'Main Street',
            buildingNumber: 123,
          },
          {
            orderId: 'ORD002',
            customer: 'Jane Smith',
            totalItems: 7,
            orderDate: '2023-11-15',
            deliveryDate: '2023-11-20',
            deliveryDuration: 5,
            deliveryCountry: 'USA',
            deliveryCity: 'New York',
            deliveryStreet: 'Elmwood Apartments',
            buildingNumber: 'Flat 4B',
          },
          {
            orderId: 'ORD003',
            customer: 'Alice Johnson',
            totalItems: 1,
            orderDate: '2023-10-10',
            deliveryDate: '2023-10-15',
            deliveryDuration: 5,
            deliveryCountry: 'USA',
            deliveryCity: 'Denver',
            deliveryStreet: 'Pine Lane',
            buildingNumber: 456,
          }
        ];


        function transformOrders(orders) {
          return orders.map(function(order) {
            // Calculate totalItems from the items string
            var totalItems = order.items.split(',').reduce(function(sum, item) {
              var parts = item.split(':');
              var quantity = parseInt(parts[1], 10);
              return sum + quantity;
            }, 0);
        
            // Calculate deliveryDuration in days
            //Aya 
            var deliveryDuration = 
              (new Date(order.deliveryDate) - new Date(order.orderDate)) / 
              (1000 * 60 * 60 * 24);
        
            // Extract details from the deliveryAddress
            var addressParts = order.deliveryAddress.split(',').map(function(part) {
              return part.trim();
            });
            var buildingNumber = addressParts[0];
            var street = addressParts[1];
            var city = addressParts[2];
            var country = addressParts[3];
        
            return {
              orderId: order.orderId,
              customer: order.customer,
              totalItems: totalItems,
              orderDate: order.orderDate,
              deliveryDate: order.deliveryDate,
              deliveryDuration: deliveryDuration,
              deliveryCountry: country,
              deliveryCity: city,
              deliveryStreet: street,
              buildingNumber: isNaN(parseInt(buildingNumber, 10)) ? buildingNumber : parseInt(buildingNumber, 10),
            };
          });
        }
        console.log(transformOrders(orders));