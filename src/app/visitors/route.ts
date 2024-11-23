import { get } from '@/utils/counter';

export async function GET() {
  return new Response(JSON.stringify(await get()));
}
