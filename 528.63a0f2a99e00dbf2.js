"use strict";(self.webpackChunkfincaticafront=self.webpackChunkfincaticafront||[]).push([[528],{528:(f,s,r)=>{r.r(s),r.d(s,{ColoresModule:()=>h});var c=r(9808),l=r(2517),o=r(1223),u=r(2340),i=r(520);let a=(()=>{class t{constructor(e){this.http=e,this.baseUrl=u.N.herokuUrl}consultarColores(){return this.http.get(`${this.baseUrl}/colores`)}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(i.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function p(t,n){if(1&t&&(o.TgZ(0,"tr")(1,"th",4),o._uU(2),o.qZA(),o.TgZ(3,"td"),o._uU(4),o.qZA(),o.TgZ(5,"td")(6,"button",5),o._uU(7,"Editar"),o.qZA(),o.TgZ(8,"button",6),o._uU(9,"Eliminar"),o.qZA()()()),2&t){const e=n.$implicit;o.xp6(2),o.Oqu(e.nombre),o.xp6(2),o.Oqu(e.estado)}}const d=[{path:"",component:(()=>{class t{constructor(e){this.coloresService=e}ngOnInit(){this.coloresService.consultarColores().subscribe(e=>{this.colores=e,console.log(this.colores)})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(a))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-main"]],decls:17,vars:1,consts:[["type","button",1,"btn","btn-primary"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],["type","button",1,"btn","btn-success"],["type","button",1,"btn","btn-danger","ml-1"]],template:function(e,C){1&e&&(o.TgZ(0,"h3"),o._uU(1,"Lista de Colores"),o.qZA(),o.TgZ(2,"button",0),o._uU(3,"Nuevo Color"),o.qZA(),o._UZ(4,"br")(5,"br"),o.TgZ(6,"table",1)(7,"thead")(8,"tr")(9,"th",2),o._uU(10,"Color"),o.qZA(),o.TgZ(11,"th",2),o._uU(12,"Estado"),o.qZA(),o.TgZ(13,"th",2),o._uU(14,"Acciones"),o.qZA()()(),o.TgZ(15,"tbody"),o.YNc(16,p,10,2,"tr",3),o.qZA()()),2&e&&(o.xp6(16),o.Q6J("ngForOf",C.colores))},directives:[c.sg],styles:[""]}),t})()},{path:"**",redirectTo:""}];let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[l.Bz.forChild(d)],l.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[c.ez,m]]}),t})()}}]);