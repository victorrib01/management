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
const Order_1 = __importDefault(require("./Order"));
let Status = class Status {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Status.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Status.prototype, "label", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Status.prototype, "value", void 0);
__decorate([
    typeorm_1.OneToMany(() => Order_1.default, order => order.status, {
        cascade: ['insert', 'update']
    }),
    typeorm_1.JoinColumn({ name: 'category_id' }),
    __metadata("design:type", Order_1.default)
], Status.prototype, "order", void 0);
Status = __decorate([
    typeorm_1.Entity('status')
], Status);
exports.default = Status;
