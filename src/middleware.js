
import { NextResponse } from 'next/server';
import Jwt from 'jsonwebtoken'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const cookieValue=request.cookies.get('token')?.value;
    if (!cookieValue) {
        console.log("middleware クッキーがありません。")
        return NextResponse.redirect(new URL('/', request.url));
    }

    console.log("middleware cookieValue:",cookieValue)
    try {
        // トークンの検証
        const decodedToken = Jwt.verify(cookieValue,process.env.NEXT_PUBLIC_SECRET_KEY);

        console.log("middleware decodedtoken:",decodedToken)
        // 有効なトークンの場合、次の処理に進む
        return NextResponse.next();
    } catch (error) {
        console.error('Token decoding error:', error);
        console.log("middleware トークンの検証に失敗しました。")
        // return NextResponse.redirect(new URL('/', request.url));
    }
}


// See "Matching Paths" below to learn more
export const config = {
    matcher: '/limitedpage',
};