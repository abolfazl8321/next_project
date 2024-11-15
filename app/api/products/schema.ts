import {z} from 'zod';

const schema=z.object({
    productName:z.string().min(4),
    price:z.number().min(0.5).max(1000)
});
export default schema;