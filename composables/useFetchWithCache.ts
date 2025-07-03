//https://masteringnuxt.com/blog/writing-a-cache-composable-in-nuxt-3
import {StorageSerializers, useSessionStorage} from '@vueuse/core';

export default async <T>(url: string) => {
  // Use sessionStorage to cache data
  const cached = useSessionStorage<T>(url, null, {
    serializer: StorageSerializers.object,
  });

  if (!cached.value) {
    const { data, error } = await useFetch<T>(url);

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `Could not fetch data from ${url}`,
      });
    }

    // Update the cache
    cached.value = data.value as T;
  } else {
    console.log(`Getting value from cache for ${url}`);
  }

  return cached;
};

//use it
// Get all users
//const user = useFetchWithCache<User[]>('/api/users')

// Or fetch the settings
//const settings = useFetchWithCache<Settings>('/api/settings')