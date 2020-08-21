export const ticketsRoutes = {
  root: '/app/tickets',
  single_ticket: {
    route: '/app/tickets/:id',
    to: (id) => `/app/tickets/${id}`,
  },
}
