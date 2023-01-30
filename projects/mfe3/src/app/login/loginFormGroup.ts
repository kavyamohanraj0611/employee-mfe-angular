import { FormControl } from "@angular/forms";

export interface loginFormGroup
{
    userEmail:FormControl<string>;
    password: FormControl<string>;
}