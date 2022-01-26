import React, {useEffect, useState} from 'react';
import { navigate } from "gatsby"

import Layout from "../components/layout"

export default function Details() {
    const [state, setState] = useState(null)

    useEffect(() => {
        let params = (new URL(document.location)).searchParams;
        let query = params.get('name');
        
        fetch(`https://api.coingecko.com/api/v3/exchanges/${query}`).then(res => res.json()).then(setState)

    }, [])
    if (state === null) return <h1>Loading...</h1>
    return (
        <Layout>
        <div className="flex bg-gray-700">
        <div className="px-10">
            <div className="bg-gray-700 max-w-xl rounded-2xl px-10 py-8 shadow-xl">
            <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center font-bold text-white">
                <img src={state.image} alt={state.name} className="h-14 w-14 rounded-full" />
            </div>
            <div className="mt-4">
                <h1 className="text-lg text-white font-semibold hover:underline cursor-pointer">{state.name}</h1>
                <div className="flex flex-col mb-4 text-gray-500">
                    <span className="text-lg">Ranked #{state.trust_score_rank}</span>
                    <span className="text-gray-500 text-sm">{state.year_established}</span>
                    {state.description && (
                    <p className="mt-4 text-md text-white">{state.description}</p>
                )}
                    <div className="flex flex-wrap gap-2">
                    {state.facebook_url && (
                        <a href={state.facebook_url}>
                        <button className="bg-gray-700 p-2 font-semibold text-gray-400 inline-flex items-center space-x-2 rounded">
                        <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </button>
                        </a>
                    )}
                    {state.twitter_handle && (
                        <a href={`https://twitter.com/${state.twitter_handle}`}>
                        <button className="bg-gray-700 p-2 font-semibold text-gray-400 inline-flex items-center space-x-2 rounded">
                        <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                        </button>
                        </a>
                    )}
                    {state.reddit_url && (
                        <a href={state.reddit_url}>
                        <button className="bg-gray-700 p-2 font-semibold text-gray-400 inline-flex items-center space-x-2 rounded">
                        <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" /></svg>
                        </button>
                        </a>
                    )}
                    </div>
                </div>
                <div className="mt-4 flex items-center space-x-4">
                    <div className="text-sm text-gray-400 flex space-x-1 items-center">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{state.country}</span>
                    </div>
                </div>
            </div>
            </div>

        </div>
        </div>
            <div className="px-10 py-8">
                <button className="px-4 py-2 rounded-md text-sm font-medium border-b-2 focus:outline-none focus:ring transition text-gray-400 bg-gray-600 border-gray-900" onClick={()=>{navigate("/")}}>Back</button>
            </div>
        </Layout>
    )
}