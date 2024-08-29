import type { MetaFunction } from "@remix-run/node";
import List from './List';

export const meta: MetaFunction = () => {
  return [
    { title: "Pimpika" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl mb-4">สถานะหนังสือ</h1>
      <List/> 
      <p>ข้อมูลอ้างอิง https://club.b2s.co.th/th/knowledge-detail/12520/book-fair-2024-best-seller-books</p>
      <p>ข้อมูลอ้างอิงราคา https://www.naiin.com</p>

    </div>
  );
}

