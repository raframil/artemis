export const formatDeal = async (deals: any) => {
  const serializedDealsArray: any[] = []
  
  for await (const deal of deals) {
    let serializedDeal = {
      dealId: deal.id,
      title: deal.title,
      clientName: deal.person_name,
      value: deal.value,
      currency: deal.currency,
      date: deal.update_time,
      status: deal.status,
      email: deal.cc_email
    }
    serializedDealsArray.push(serializedDeal)
  }
  return serializedDealsArray
};
