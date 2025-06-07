import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the CSV manager page
  redirect('/csv-manager');
}
