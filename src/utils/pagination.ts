export const paginate = (items: any[], page: number, perPage: number) => {
    const offset = (page - 1) * perPage;
    return items.slice(offset, offset + perPage);
  };
  