import { Injectable } from '@angular/core';
import { Backend } from './backend';
import { LocalBackend } from './local-backend';

@Injectable()
export class BackendHolder { backend: Backend = new LocalBackend(); }
