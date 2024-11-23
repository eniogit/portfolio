'use server';

import { DateTime } from 'luxon';

type Visitor = {
  id: string;
  timestamp: number;
};

const set = new Map<string, Visitor>();

export async function add(id: string): Promise<boolean> {
  if (set.has(id)) {
    return false;
  }
  set.set(id, {
    id,
    timestamp: Date.now(),
  });
  return true;
}

export async function get() {
  const entries = Array.from(set.entries());
  const todayEntriesSize = entries.filter((entry) =>
    DateTime.fromMillis(entry[1].timestamp).hasSame(DateTime.now(), 'day'),
  ).length;
  const monthEntriesSize = entries.filter((entry) =>
    DateTime.fromMillis(entry[1].timestamp).hasSame(DateTime.now(), 'month'),
  ).length;
  const yearEntriesSize = entries.filter((entry) =>
    DateTime.fromMillis(entry[1].timestamp).hasSame(DateTime.now(), 'year'),
  ).length;
  return {
    today: todayEntriesSize,
    month: monthEntriesSize,
    year: yearEntriesSize,
  };
}
