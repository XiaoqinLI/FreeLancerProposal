export class Proposal {
    constructor(public id?: number,
                public customer?: number,
                public portfolio_url: string = 'http://',
                public tool?: string,
                public estimated_hours?: string,
                public hourly_rate?,
                public weeks_to_complete?: string,
                public client_email?: string,){

    }
}

// 15, 'Google Company', 'http://www.google.com', 'Ruby on Rails', 150, 120, 15, 'google@gamil.com'