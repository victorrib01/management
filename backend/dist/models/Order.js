"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Address_1 = __importDefault(require("./Address"));
//import Product from './Product';
const Client_1 = __importDefault(require("./Client"));
const Status_1 = __importDefault(require("./Status"));
let Order = class Order {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Order.prototype, "amount", void 0);
__decorate([
    typeorm_1.OneToMany(() => Status_1.default, status => status.order),
    typeorm_1.JoinColumn({ name: 'status_id' }),
    __metadata("design:type", Status_1.default)
], Order.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Client_1.default, client => client.orders),
    typeorm_1.JoinColumn({ name: 'client_id' }),
    __metadata("design:type", Client_1.default)
], Order.prototype, "client", void 0);
__decorate([
    typeorm_1.OneToMany(() => Address_1.default, address => address.id),
    typeorm_1.JoinColumn({ name: 'address_id' }),
    __metadata("design:type", Address_1.default)
], Order.prototype, "address", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Order.prototype, "created_at", void 0);
Order = __decorate([
    typeorm_1.Entity('orders')
], Order);
exports.default = Order;
