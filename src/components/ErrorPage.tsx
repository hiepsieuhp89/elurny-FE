import React from 'react';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { IconSquarePlus } from '@tabler/icons-react';
import { motion } from 'framer-motion';
interface ErrorResponse {
    status: number;
    statusText: string;
    data: string;
}

const ErrorPage: React.FC = () => {
    const error = useRouteError();

    let errorMessage = 'An unexpected error has occurred!';
    let statusCode = '500';
    let statusText = 'Server Error';

    if (isRouteErrorResponse(error)) {
        statusCode = error.status.toString();
        statusText = error.statusText || 'Error';
        errorMessage = error.data?.message || error.data || 'An unexpected error has occurred!';

        if (error.status === 404) {
            statusText = 'Not Found';
            errorMessage = 'The page you are looking for does not exist or has been moved.';
        }
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-backgroundDarkColorV1 p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-section p-[30px] text-center">
                <div className="mb-6">
                    <h1 className="text-6xl font-bold text-mainColorV1 mb-2">{statusCode}</h1>
                    <h2 className="text-2xl font-semibold text-grayV2-800 mb-4">{statusText}</h2>
                    <div className="w-24 h-1 bg-mainColorV1 mx-auto mb-6"></div>
                    <p className="text-grayV2-600 mb-[30px]">{errorMessage}</p>

                    <div className="flex flex-col space-y-4 justify-center items-center">
                        <Button
                            className="bg-mainColorV1 hover:bg-activeColorV1 text-white w-full"
                            asChild
                        >
                        </Button>

                        <motion.button
                            className="bg-mainColorV1 hover:bg-mainColorV1/90 text-white px-4 py-2 gap-[10px] items-center rounded-2xl h-[46px] w-[240px] flex justify-center "
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link to="/" className='text-xs font-bold'>Back to Home</Link>
                        </motion.button>
                        <motion.button
                            className="bg-mainColorV1 hover:bg-mainColorV1/90 text-white px-4 py-2 gap-[10px]  rounded-2xl h-[46px] w-[240px] flex justify-center items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            onClick={() => window.history.back()}
                        >
                            <span className='text-xs font-bold'>Go Back</span>
                        </motion.button>
                    </div>
                </div>

                <p className="text-xs text-grayV2-500 mt-6">
                    💿 If the error persists, please contact an administrator.
                </p>
            </div>
        </div>
    );
};

export default ErrorPage; 