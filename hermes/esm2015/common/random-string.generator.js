/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class RandomStringGenerator {
    constructor() {
        for (let i = 0; i < 256; i++) {
            RandomStringGenerator.byteToHex[i] = (i + 0x100).toString(16).substr(1);
            RandomStringGenerator.hexToByte[RandomStringGenerator.byteToHex[i]] = i;
        }
    }
    /**
     * @return {?}
     */
    static generate() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    /**
     * @return {?}
     */
    static getUuidV4() {
        /** @type {?} */
        const result = this.getRandomFromMathRandom();
        result[6] = (result[6] & 0x0f) | 0x40;
        result[8] = (result[8] & 0x3f) | 0x80;
        return result;
    }
    /**
     * @param {?} buf
     * @param {?=} offset
     * @return {?}
     */
    static uuidToString(buf, offset = 0) {
        /** @type {?} */
        let i = offset;
        /** @type {?} */
        let bth = this.byteToHex;
        return bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]];
    }
    /**
     * @return {?}
     */
    static getRandomFromMathRandom() {
        /** @type {?} */
        let result = new Array(16);
        /** @type {?} */
        let r = 0;
        for (let i = 0; i < 16; i++) {
            if ((i & 0x03) === 0) {
                r = Math.random() * 0x100000000;
            }
            result[i] = r >>> ((i & 0x03) << 3) & 0xff;
        }
        return (/** @type {?} */ (result));
    }
}
RandomStringGenerator.byteToHex = [];
RandomStringGenerator.hexToByte = {};
RandomStringGenerator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RandomStringGenerator.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    RandomStringGenerator.byteToHex;
    /** @type {?} */
    RandomStringGenerator.hexToByte;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLXN0cmluZy5nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vcmFuZG9tLXN0cmluZy5nZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxPQUFPLHFCQUFxQjtJQU1qQztRQUNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0IscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEUscUJBQXFCLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4RTtJQUNGLENBQUM7Ozs7SUFFRCxNQUFNLENBQUMsUUFBUTtRQUVkLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsRyxDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLFNBQVM7O2NBQ1QsTUFBTSxHQUFRLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtRQUVsRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFdEMsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQWtCLEVBQUUsU0FBaUIsQ0FBQzs7WUFDckQsQ0FBQyxHQUFHLE1BQU07O1lBQ1YsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTO1FBQ3hCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUc7WUFDbkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRztZQUNuQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHO1lBQ25DLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUc7WUFDbkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM3QixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLHVCQUF1Qjs7WUFDekIsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQzs7WUFFdEIsQ0FBQyxHQUFHLENBQUM7UUFDVCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNyQixDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQzthQUNoQztZQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDM0M7UUFFRCxPQUFPLG1CQUFBLE1BQU0sRUFBaUIsQ0FBQztJQUNoQyxDQUFDOztBQWxETSwrQkFBUyxHQUFhLEVBQUUsQ0FBQztBQUV6QiwrQkFBUyxHQUErQixFQUFFLENBQUM7O1lBTGxELFVBQVU7Ozs7OztJQUdWLGdDQUFnQzs7SUFFaEMsZ0NBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIHtcblxuXHRzdGF0aWMgYnl0ZVRvSGV4OiBzdHJpbmdbXSA9IFtdO1xuXG5cdHN0YXRpYyBoZXhUb0J5dGU6IHsgW2hleDogc3RyaW5nXTogbnVtYmVyOyB9ID0ge307XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuXHRcdFx0UmFuZG9tU3RyaW5nR2VuZXJhdG9yLmJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG5cdFx0XHRSYW5kb21TdHJpbmdHZW5lcmF0b3IuaGV4VG9CeXRlW1JhbmRvbVN0cmluZ0dlbmVyYXRvci5ieXRlVG9IZXhbaV1dID0gaTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgZ2VuZXJhdGUoKTogc3RyaW5nIHtcblxuXHRcdHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KTtcblx0fVxuXG5cdHN0YXRpYyBnZXRVdWlkVjQoKSB7XG5cdFx0Y29uc3QgcmVzdWx0OiBhbnkgPSB0aGlzLmdldFJhbmRvbUZyb21NYXRoUmFuZG9tKCk7XG5cblx0XHRyZXN1bHRbNl0gPSAocmVzdWx0WzZdICYgMHgwZikgfCAweDQwO1xuXHRcdHJlc3VsdFs4XSA9IChyZXN1bHRbOF0gJiAweDNmKSB8IDB4ODA7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0c3RhdGljIHV1aWRUb1N0cmluZyhidWY6IEFycmF5PG51bWJlcj4sIG9mZnNldDogbnVtYmVyID0gMCkge1xuXHRcdGxldCBpID0gb2Zmc2V0O1xuXHRcdGxldCBidGggPSB0aGlzLmJ5dGVUb0hleDtcblx0XHRyZXR1cm4gYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuXHRcdFx0YnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuXHRcdFx0YnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuXHRcdFx0YnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuXHRcdFx0YnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuXHRcdFx0YnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuXHRcdFx0YnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuXHRcdFx0YnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV07XG5cdH1cblxuXHRzdGF0aWMgZ2V0UmFuZG9tRnJvbU1hdGhSYW5kb20oKTogQXJyYXk8bnVtYmVyPiB7XG5cdFx0bGV0IHJlc3VsdCA9IG5ldyBBcnJheSgxNik7XG5cblx0XHRsZXQgciA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG5cdFx0XHRpZiAoKGkgJiAweDAzKSA9PT0gMCkge1xuXHRcdFx0XHRyID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuXHRcdFx0fVxuXHRcdFx0cmVzdWx0W2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQgYXMgQXJyYXk8bnVtYmVyPjtcblx0fVxuXG59XG4iXX0=