/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface Event {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  display_text_range: number[];
  source: string;
  truncated: boolean;
  in_reply_to_status_id?: any;
  in_reply_to_status_id_str?: any;
  in_reply_to_user_id?: any;
  in_reply_to_user_id_str?: any;
  in_reply_to_screen_name?: any;
  user: User;
  geo?: any;
  coordinates?: any;
  place: Place;
  contributors?: any;
  is_quote_status: boolean;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  favorite_count: number;
  entities: Entities;
  extended_entities: Extendedentities;
  favorited: boolean;
  retweeted: boolean;
  possibly_sensitive: boolean;
  filter_level: string;
  lang: string;
  timestamp_ms: string;
}

interface Extendedentities {
  media: Media2[];
}

interface Media2 {
  id: number;
  id_str: string;
  indices: number[];
  additional_media_info: Additionalmediainfo;
  media_url: string;
  media_url_https: string;
  url: string;
  display_url: string;
  expanded_url: string;
  type: string;
  video_info: Videoinfo;
  sizes: Sizes;
}

interface Videoinfo {
  aspect_ratio: number[];
  duration_millis: number;
  variants: Variant[];
}

interface Variant {
  bitrate?: number;
  content_type: string;
  url: string;
}

interface Entities {
  hashtags: any[];
  urls: any[];
  user_mentions: any[];
  symbols: any[];
  media: Media[];
}

interface Media {
  id: number;
  id_str: string;
  indices: number[];
  additional_media_info: Additionalmediainfo;
  media_url: string;
  media_url_https: string;
  url: string;
  display_url: string;
  expanded_url: string;
  type: string;
  sizes: Sizes;
}

interface Sizes {
  thumb: Thumb;
  small: Thumb;
  large: Thumb;
  medium: Thumb;
}

interface Thumb {
  w: number;
  h: number;
  resize: string;
}

interface Additionalmediainfo {
  monetizable: boolean;
}

interface Place {
  id: string;
  url: string;
  place_type: string;
  name: string;
  full_name: string;
  country_code: string;
  country: string;
  bounding_box: Boundingbox;
  attributes: Attributes;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Attributes {
}

interface Boundingbox {
  type: string;
  coordinates: number[][][];
}

interface User {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  url?: any;
  description: string;
  translator_type: string;
  protected: boolean;
  verified: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  favourites_count: number;
  statuses_count: number;
  created_at: string;
  utc_offset?: any;
  time_zone?: any;
  geo_enabled: boolean;
  lang?: any;
  contributors_enabled: boolean;
  is_translator: boolean;
  profile_background_color: string;
  profile_background_image_url: string;
  profile_background_image_url_https: string;
  profile_background_tile: boolean;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
  default_profile: boolean;
  default_profile_image: boolean;
  following?: any;
  follow_request_sent?: any;
  notifications?: any;
}