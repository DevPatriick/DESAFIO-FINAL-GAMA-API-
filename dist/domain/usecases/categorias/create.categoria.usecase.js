"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoria_repository_1 = __importDefault(require("../../../adapters/repositories/categoria.repository"));
class CreateCategoriaUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._repository.create(data);
        });
    }
}
exports.default = new CreateCategoriaUseCase(categoria_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNhdGVnb3JpYS51c2VjYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy9jYXRlZ29yaWFzL2NyZWF0ZS5jYXRlZ29yaWEudXNlY2FzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBLCtHQUFzRjtBQUV0RixNQUFNLHNCQUFzQjtJQUV4QixZQUFvQixXQUFpQztRQUFqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7SUFFckQsQ0FBQztJQUVLLE9BQU8sQ0FBQyxJQUFzQjs7WUFDaEMsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxzQkFBc0IsQ0FDckMsOEJBQW1CLENBQ3RCLENBQUMifQ==