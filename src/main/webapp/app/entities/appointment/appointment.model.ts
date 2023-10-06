export interface IAppointment {
  id: number;
  reason?: string | null;
  insuranceChange?: boolean | null;
  phoneNumber?: string | null;
}

export type NewAppointment = Omit<IAppointment, 'id'> & { id: null };
