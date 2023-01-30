import { FormControl } from "@angular/forms";

export interface basicFormGroup
{
    id:FormControl<string>;
    employeeName: FormControl<string>;
    employeeDepartment: FormControl<string>;
    employeeEmail: FormControl<string>;
    employeePhoneNumber: FormControl<number>;
}