import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RecommendationChatMessage} from '../models/recommendation-chat-message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  constructor(private readonly http: HttpClient) {
  }

  getAllGlobalRoles(text: string, userId: number): Observable<RecommendationChatMessage> {
    const data = {
      userId,
      text
    };
    return this.http.post<RecommendationChatMessage>(`/api/v1/recommendations/chat_bot`, data);
  }
}
