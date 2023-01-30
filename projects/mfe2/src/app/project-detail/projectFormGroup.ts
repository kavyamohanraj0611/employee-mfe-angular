import { FormControl } from "@angular/forms";

export interface projectFormGroup
{
    id:FormControl<string>;
    employeeName: FormControl<string>;
    projectName: FormControl<string>;
    projectDescription: FormControl<string>;
    managerName: FormControl<string>;
}