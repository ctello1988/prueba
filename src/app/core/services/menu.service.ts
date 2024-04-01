import { Customer } from "@interfaces/customers/customers";

export class MenuService{

    getAllCustomers(): Menu[] {
       const customersResponse = customer.map(customer => new CustomersResponde(customer));
        const customersMapper = customersResponse.map(customer => CustomersMapper.map(customer));
        return customersMapper;
    

    }
}