'use server'

import { revalidatePath } from 'next/cache'

export async function refreshData(path) {
  // Ye line us specific page ka cache turant uda degi
  revalidatePath(path) 
}